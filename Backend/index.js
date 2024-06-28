import  express  from "express";
import userRoutes from "./routes/users.js"
import postsRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import commentsRoutes from "./routes/comments.js"
import likesRoutes from "./routes/likes.js"
import relationshipsRoutes from "./routes/relationships.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

// Middlewares 
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next();
    
})
app.use(express.json()) // Parse incoming requests with JSON payloads
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../Frontend/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  app.post("/api/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
  });

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postsRoutes)
app.use("/api/likes",likesRoutes)
app.use("/api/comments",commentsRoutes)
app.use("/api/relationships", relationshipsRoutes);

app.listen(8800,()=>{
    console.log("Server up")
})