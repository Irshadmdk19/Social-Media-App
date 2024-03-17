import  express  from "express";
import userRoutes from "./routes/users.js"
import postsRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import commentsRoutes from "./routes/comments.js"
import likesRoutes from "./routes/likes.js"

import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

// Middlewares 
app.use(express.json()) // Parse incoming requests with JSON payloads
app.use(cors());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postsRoutes)
app.use("/api/likes",likesRoutes)
app.use("/api/comments",commentsRoutes)

app.listen(8800,()=>{
    console.log("Server up")
})