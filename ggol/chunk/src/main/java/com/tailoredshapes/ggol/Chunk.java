package com.tailoredshapes.ggol;

import java.util.List;

import static spark.Spark.*;
import static com.tailoredshapes.underbar.UnderBar.list;
import static com.tailoredshapes.underbar.UnderString.join;

public interface Chunk {

    final class Point {
        int X;
        int Y;

        public String toString(){ return String.format("[%d, %d]", this.X, this.Y);}
    }

    List<Point> world = list();

    static void main(String... args){
        port(Integer.parseInt(System.getenv("CHUNK_PORT")));

        get("world", (res, req) -> join(world));
    }
}
