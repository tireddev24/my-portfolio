import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  duration?: number;
  pauseDuration?: number;
  characters?: string;
}

const ScrambleText = ({
  text,
  duration = 1000,
  pauseDuration = 3000,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789</>$#@%&',
}: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let frame = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const totalFrames = Math.max(1, Math.floor(duration / 30));

    const scramble = () => {
      const progress = frame / totalFrames;

      const resolvedCharacters = Math.floor(progress * text.length);

      let result = '';

      for (let i = 0; i < text.length; i++) {
        if (i < resolvedCharacters) {
          result += text[i];
        } else {
          result += characters[Math.floor(Math.random() * characters.length)];
        }
      }

      setDisplayText(result);

      if (frame < totalFrames) {
        frame++;
        timeout = setTimeout(scramble, 30);
      } else {
        setDisplayText(text);

        timeout = setTimeout(() => {
          frame = 0;
          scramble();
        }, pauseDuration);
      }
    };

    scramble();

    return () => clearTimeout(timeout);
  }, [text, duration, pauseDuration, characters]);

  return <span className="inline-block font-mono">{displayText}</span>;
};

export default ScrambleText;
