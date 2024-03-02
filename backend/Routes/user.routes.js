import express from 'express';
const routes = express.Router();
import User from '../Model/User.model.js';

routes.get('/', (req, res) => {
    res.send('User routes working');
});


routes.post('/register', async (req, res) => {
    try {
        const {username,email,password} = req.body;
        if(!username || !password || !email)
        {
            return res.status(400).json({
                message: 'Please provide all the credentials'
            })
        }
    
        const existUser = await User.findOne({email});
        if(existUser)
        {
            return res.status(400).json({
                message: 'User already exists'
            })
        }
        
        const user = await User.create({
            username,
            email,
            password
        })
    
        if(!user)
        {
            return res.status(400).json({
                message: 'User not created'
            })
        }
    
        return res.status(201).json({
            message: 'User created successfully',
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
    
})

export default routes;