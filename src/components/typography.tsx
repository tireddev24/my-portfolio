import { useEffect, useState } from 'react';

interface TypographyAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypographyAnimation = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 100,
  pauseDuration = 50,
}: TypographyAnimationProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, text.length + 1);
          setText(nextText);

          if (nextText === currentWord) {
            setIsDeleting(true);
          }
        } else {
          const nextText = currentWord.slice(0, text.length - 1);
          setText(nextText);

          if (nextText === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      !isDeleting && text === currentWord
        ? pauseDuration
        : isDeleting
          ? deletingSpeed
          : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>

      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-current"
      />
    </span>
  );
};

export default TypographyAnimation;
