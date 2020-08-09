package com.tailoredshapes.ggol;

import static spark.Spark.*;

public interface Edge {
    static void main(String... args) {
        get("world", (res, req) -> "[]");
    }
}
