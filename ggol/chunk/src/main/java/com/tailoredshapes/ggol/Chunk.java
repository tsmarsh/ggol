package com.tailoredshapes.ggol;

import java.util.List;
import java.util.Objects;

import static com.tailoredshapes.underbar.UnderBar.filter;
import static spark.Spark.*;
import static com.tailoredshapes.underbar.UnderBar.list;
import static com.tailoredshapes.underbar.UnderString.join;

public class Chunk {

    final static class Point {
        int X;
        int Y;

        public Point(int x, int y) {
            X = x;
            Y = y;
        }

        public String toString(){ return String.format("[%d, %d]", this.X, this.Y);}

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            var point = (Point) o;
            return X == point.X &&
                    Y == point.Y;
        }

        @Override
        public int hashCode() {
            return Objects.hash(X, Y);
        }
    }

    static List<Point> world = list();

    static void main(String... args){
        port(Integer.parseInt(System.getenv("CHUNK_PORT")));

        get("world", (req, res) -> join(world));

        put( "world/:x/:y", (req, res) -> {
            var x = Integer.parseInt(req.params(":x"));
            var y = Integer.parseInt(req.params(":y"));
            world = bringToLife(world, x, y);
            return join(world);
        });

        delete("world/:x/:y", (req, res) -> {
            var x = Integer.parseInt(req.params(":x"));
            var y = Integer.parseInt(req.params(":y"));
            kill(world, x, y);
            return join(world);
        })
    }

    static void kill(List<Point> world, int x, int y) {
        filter(world, p -> p.equals(new Point(x, y)));
    }

    static Lis bringToLife(List<Point> world, int x, int y) {
        world.add(new Point(x, y));
    }
}
