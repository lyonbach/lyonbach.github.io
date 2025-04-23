PROJECT_ROOT=/media/lyonbach/depot/Work/Projects/mr-angry-cube-raylib
mkdir -p $(pwd)/assets
for folder in "models" "shaders" "textures";
do
    mkdir -p $(pwd)/assets/$folder
    for file in $(ls $PROJECT_ROOT/$folder);
    do 
        echo Copying $file...;
        cp $PROJECT_ROOT/$folder/$file $(pwd)/assets/$folder;
    done
done

