import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Article } from '../models/article';

interface ContentListProps {
    articles: Article[];
}

const ContentList: React.FC<ContentListProps> = ({ articles }) => {
    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Grid container spacing={3}>
                {articles.map((article: Article) => (
                    <Grid item xs={12} sm={6} md={4} key={article.url}>
                        <Card sx={{ cursor: 'pointer' }} onClick={() => window.open(article.url, '_blank')}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={article.urlToImage || ''}
                                alt={article.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {article.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ContentList;
