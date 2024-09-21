/**
 * Chat.jsx
 * 
 * This file contains the Chat component.
 * The Chat component is used to display the chat interface.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Button, Paper, CircularProgress, List, ListItem, ListItemText } from '@mui/material';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        const newMessage = {
            position: 'right',
            text: input,
            date: new Date(),
        };
        setMessages([...messages, newMessage]);
        setInput('');
        setIsLoading(true);

        // Simulating API call to chatbot
        setTimeout(() => {
            const botReply = {
                position: 'left',
                text: "This is a sample response from the chatbot.",
                date: new Date(),
            };
            setMessages(prevMessages => [...prevMessages, botReply]);
            setIsLoading(false);
        }, 1000);

        // TODO: Implement actual API call to your chatbot backend
        // const response = await fetch('/api/chat', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ message: input }),
        // });
        // const data = await response.json();
        // setMessages(prevMessages => [...prevMessages, { 
        //     position: 'left',
        //     text: data.reply,
        //     date: new Date(),
        // }]);
        // setIsLoading(false);
    };

    return (
        <Box sx={{ flexGrow: 1, mt: 4, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Chat with CASEY
            </Typography>
            <Paper elevation={3} sx={{ flexGrow: 1, mb: 2, p: 2, overflowY: 'auto' }}>
                <List>
                    {messages.map((message, index) => (
                        <ListItem key={index} sx={{ justifyContent: message.position === 'right' ? 'flex-end' : 'flex-start' }}>
                            <Paper elevation={1} sx={{ p: 1, maxWidth: '70%', bgcolor: message.position === 'right' ? 'primary.light' : 'grey.100' }}>
                                <ListItemText
                                    primary={message.text}
                                    secondary={message.date.toLocaleTimeString()}
                                />
                            </Paper>
                        </ListItem>
                    ))}
                </List>
                {isLoading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <CircularProgress size={20} />
                    </Box>
                )}
                <div ref={messagesEndRef} />
            </Paper>
            <Box sx={{ display: 'flex' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Type your message..."
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button variant="contained" onClick={handleSendMessage} sx={{ ml: 1 }}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default Chat;
