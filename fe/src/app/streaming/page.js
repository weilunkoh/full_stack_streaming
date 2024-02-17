'use client'
import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import NextLink from 'next/link';


const Streaming = () => {
  const [textInput, setTextInput] = useState('');
  const [streamedWords, setStreamedWords] = useState([]);

  const decoder = new TextDecoder();

  const handleSubmit = async (event) => {
    // Reset to blank
    setStreamedWords([]);
    event.preventDefault();
    const formData = new FormData();
    formData.append('text', textInput);

    // try {
      const response = await fetch('http://localhost:5000/stream_words', {
        method: 'POST',
        body: formData,
      });

      const reader = response.body.getReader();

      while (true) {
        const { done, value } = await reader.read();
        const stringValue = decoder.decode(value);

        if (done) {
          break;
        }

        setStreamedWords((prevWords) => [...prevWords, stringValue]);
      }
    // } catch (error) {
    //   console.error('Error fetching streamed words:', error);
    // }
  };

  const generateRandomParagraph = () => {
    const randomParagraphs = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis auctor, bibendum urna sit amet, varius sapien.',
      'Sed auctor, mi nec fermentum convallis, odio nunc tincidunt metus, et ultricies nunc justo nec arcu.',      
    ];
    const randomIndex = Math.floor(Math.random() * randomParagraphs.length);
    setTextInput(randomParagraphs[randomIndex]);
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Text Streaming Example
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 'xl', width: '75%' }}>
          <Button 
            variant="contained" 
            color="secondary"
            fullWidth
            onClick={generateRandomParagraph}
          >
            Generate Random Paragpraph
          </Button>
          <TextField
            margin="normal"
            required
            fullWidth
            id="textInput"
            label="Input Text"
            placeholder="Type a paragraph or click on the button above to generate a random one. You can then view the streaming output that echos your input."
            name="textInput"
            // autoComplete="email"
            autoFocus
            multiline
            rows={5}
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
        <Box sx={{ mt: 3, width: '75%', textAlign: 'justify'}}>
          <Typography variant="h6" component="h2">
            Streaming Output:
          </Typography>
          <Typography>
            {streamedWords.join(' ')}
          </Typography>
        </Box>
        <Typography sx={{mt: 6}}>
          <Link href="/" color="secondary" component={NextLink}>
            Return to Home
          </Link>
        </Typography> 
      </Box>
    </Container>
  );
}

export default Streaming;
