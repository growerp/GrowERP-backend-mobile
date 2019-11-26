#!/bin/bash
set -x

PROJECTNAME=$1
BRANCH=$2
REPOSITORY=github.com
GITHUBUSER=growerp
GITHUBPASS=Tt4IG1E14wRr
DOCKERHUBACCOUNT=growerpsupport
DOCKERHUBPASSWORD=FKIJyT5o14Rn
DOCKERHUBPROJECT=$(echo "$1" | tr '[:upper:]' '[:lower:]')

if [ "$BRANCH" == "" ] ; then 
    BRANCH="master"
fi

if [ "$PROJECTNAME" == "" ] || [ "$BRANCH" == "" ]; then
    echo "Enter project name. Ex: ./createMoquiImage.sh PROJECT_NAME BRANCH"
    exit 1
fi

echo "Check if repository $PROJECTNAME exits"
if ! git ls-remote https://$GITHUBUSER:$GITHUBPASS@$REPOSITORY/$GITHUBUSER/$PROJECTNAME >/dev/null ; then
    echo could not find repository $PROJECTNAME !
    exit 1  
fi
rm -rf dockerImages
mkdir dockerImages
DOCKERIMAGES=$PWD/dockerImages
git clone https://github.com/moqui/moqui-framework.git dockerImages/$BRANCH/$PROJECTNAME
chmod +x dockerImages/$BRANCH/$PROJECTNAME

cp initstart.sh dockerImages/$BRANCH/$PROJECTNAME/docker/simple
cp Dockerfile dockerImages/$BRANCH/$PROJECTNAME/docker/simple
cd dockerImages/$BRANCH/$PROJECTNAME
./gradlew getComponent -Pcomponent=PopCommerce
./gradlew downloadElasticSearchLinux
git clone https://$GITHUBUSER:$GITHUBPASS@$REPOSITORY/$GITHUBUSER/$PROJECTNAME runtime/component/$PROJECTNAME

if [ "$BRANCH" != "master" ]; then
    cd runtime/component/$PROJECTNAME
    git checkout -b $BRANCH origin/$BRANCH
    cd ../../..
fi

# Add postgres plugin
sed -i -e '/compile project('\'':moqui-util'\'')/a \\    runtime '\''postgresql:postgresql:9.2-1002.jdbc4'\''' framework/build.gradle

./gradlew build && ./gradlew --stop

cd docker/simple

sed -i 's/rm Procfile/\#rm Procfile/g' docker-build.sh

docker logout # avoid uploading to docker hub when building

if [ "$BRANCH" == "master" ]; then
    echo "build $DOCKERHUBACCOUNT/$DOCKERHUBPROJECT docker image"
    if ! ./docker-build.sh ../.. $DOCKERHUBACCOUNT/$DOCKERHUBPROJECT ; then
        echo "Create image failed!"
        exit 1
    fi

    echo "push image to $DOCKERHUBACCOUNT/$DOCKERHUBPROJECT"
    if docker login -u $DOCKERHUBACCOUNT -p $DOCKERHUBPASSWORD ; then
       docker push $DOCKERHUBACCOUNT/$DOCKERHUBPROJECT
    fi

    rm -rf $DOCKERIMAGES
    docker rmi -f $(docker images -q)
else
    echo "build $DOCKERHUBACCOUNT/$DOCKERHUBPROJECT:$BRANCH docker image"
    if ! ./docker-build.sh ../.. $DOCKERHUBACCOUNT/$DOCKERHUBPROJECT:$BRANCH ; then
        echo "Create image with tags failed!"
        exit 1
    fi

    echo "push image to $DOCKERHUBACCOUNT/$DOCKERHUBPROJECT:$BRANCH"
    if docker login -u $DOCKERHUBACCOUNT -p $DOCKERHUBPASSWORD ; then
        docker push $DOCKERHUBACCOUNT/$DOCKERHUBPROJECT:$BRANCH
    fi
    rm -rf $DOCKERIMAGES
    docker rmi -f $(docker images -q)
fi

