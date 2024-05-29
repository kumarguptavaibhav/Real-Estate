import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req,res) =>{
    const query = req.query;
    try{
        const posts = await prisma.post.findMany({
            where:{
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price:{
                    gte: parseInt(query.minPrice) || 0,
                    lte: parseInt(query.maxPrice) || 10000000,
                }
            },
        });

        //setTimeout(() => {
            res.status(200).json(posts);
        //},3000)
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Failed to get Posts"})
    }
}

export const getPost = async (req,res) =>{
    const id = req.params.id;

    try{
        const post = await prisma.post.findUnique({
            where:{id},
            include:{
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true,
                    },
                },
            },
        });

        let userId;
        const token = req.cookies.token;

        if(!token) {
            userId = null;
        }else{
            jwt.verify(token, process.env.JWT_SECRET_KEY, async(err, payload)=>{
                if(err){
                    userId = null;
                }else{
                    userId = payload.id;
                }
            });
        }

        const saved = await prisma.savedPost.findUnique({
            where:{
                userId_postId:{
                    postId: id,
                    userId,
                },
            },
        });
        res.status(200).json({ ...post, isSaved: saved ? true : false });
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Failed to get Post"})
    }
}

export const addPost = async (req,res) =>{
    const body = req.body;
    const tokenUserId = req.userId;
    try{
        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserId,
                postDetail:{
                    create: body.postDetail,
                },
            },
        });
        res.status(200).json(newPost);
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Failed to create Post"})
    }
}

export const updatetPost = async (req,res) =>{
    try{
        res.status(200).json();
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Failed to update Posts"})
    }
}

export const deletePost = async (req,res) =>{
    const id = req.params.id;
    const tokenUserId = req.userId;
    try{
        const post = await prisma.post.findUnique({
            where:{id},
        });

        if(post.userId !== tokenUserId){
            return res.status(403).json({message: "Not Authorized"})
        }

        await prisma.post.delete({
            where:{id},
        });
        
        res.status(200).json({message: "Post deleted"});
    }catch(err){
        console.log(err)
        res.status(500).json({message: "Failed to delete Posts"})
    }
}