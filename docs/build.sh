echo "[1]   -> Building for WEB -";
echo "[1][1]-> Adjusting environment...";

PROJECT_ROOT=/media/lyonbach/depot/Work/Projects/mr-angry-cube-raylib
RAYLIB_PATH=/media/lyonbach/depot/Work/Learn/raylib-web/vendor/raylib/build_web/raylib;
EMSCRIPTEN_PATH=/media/lyonbach/depot/Work/Learn/emsdk;
source $EMSCRIPTEN_PATH/emsdk_env.sh;

# Test emsdk command
emsdk list | grep "INSTALLED";
if [ $? -eq 0 ]; then
    echo "[1][1]-> emsdk command executed successfully.";
else
    echo "[1][1]-> emsdk command failed.";
    exit;
fi

# Collect cpp files
echo "[2]   -> Building...";
echo "[2][1]-> Collecting source files...";
CPP_FILES=$(find ../src -type f -name "*.cpp");
CPP_FILES_ARG="";
echo "[2][2]-> Found those files:"
for cpp_file in $CPP_FILES;
do
    echo $cpp_file;
    CPP_FILES_ARG="$CPP_FILES_ARG $cpp_file";
done

echo "[2][3]->Copying files..."
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



echo $CPP_FILES_ARG;
echo "[2][4]-> Succesfully generated the arguments.";


em++ $CPP_FILES \
    -o index.html \
    -I$RAYLIB_PATH/include \
    -I$PROJECT_ROOT/src \
    -L$RAYLIB_PATH \
    -lraylib \
    -s USE_GLFW=3 \
    -s ASYNCIFY \
    -s FULL_ES2=1 \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s FORCE_FILESYSTEM=1 \
    -std=c++20 \
    --preload-file assets/models \
    --preload-file assets/shaders \
    --preload-file assets/textures

if [ $? -eq 0 ]; then
    echo "[2][5]-> Build was succesful!";
else
    echo "[2][5]-> Build failed!";
    exit;
fi