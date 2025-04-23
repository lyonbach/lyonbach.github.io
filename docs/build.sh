echo "[1]   -> Building for WEB -";
echo "[1][1]-> Adjusting environment...";

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
    echo $cpp_file
    CPP_FILES_ARG="$CPP_FILES_ARG $cpp_file";
done

echo $CPP_FILES_ARG;
echo "[2][3]-> Succesfully generated the arguments.";

em++ $CPP_FILES \
    -o index.html \
    -I/media/lyonbach/depot/Work/Learn/raylib-web/vendor/raylib/build_web/raylib/include \
    -I/media/lonbach/depot/Work/Projects/mr-angry-cube-raylib/src \
    -L/media/lyonbach/depot/Work/Learn/raylib-web/vendor/raylib/build_web/raylib \
    -lraylib \
    -s USE_GLFW=3 \
    -s ASYNCIFY \
    -s FULL_ES2=1 \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s FORCE_FILESYSTEM=1 \
    -std=c++20 \
    --preload-file assets

    # -s USE_PTHREADS=1 \
    # -s PTHREAD_POOL_SIZE=4 \
    # --preload-file /media/lyonbach/depot/Work/Projects/mr-angry-cube-raylib/build_web/assets/mr_angry_cube_high_res.obj \
    # --preload-file /media/lyonbach/depot/Work/Projects/mr-angry-cube-raylib/build_web/assets/concrete.png \
    # --preload-file /media/lyonbach/depot/Work/Projects/mr-angry-cube-raylib/build_web/assets/base.fs \

if [ $? -eq 0 ]; then
    echo "[2][4]-> Build was succesful!";
else
    echo "[2][4]-> Build failed!";
    exit;
fi