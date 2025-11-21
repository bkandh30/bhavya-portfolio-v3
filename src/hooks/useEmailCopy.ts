import { useState, useCallback } from 'react';
import { toast } from 'sonner';

interface UseEmailCopyReturn {
  isCopied: boolean;
  handleCopyEmail: (e: React.MouseEvent<HTMLAnchorElement>, url: string) => void;
}

export function useEmailCopy(): UseEmailCopyReturn {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, url: string): void => {
      e.preventDefault();
      const email = url.replace('mailto:', '');

      navigator.clipboard
        .writeText(email)
        .then(() => {
          setIsCopied(true);
          toast.success('Email copied to clipboard!');

          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch((error: unknown) => {
          console.error('Failed to copy email:', error);
          toast.error('Failed to copy email');
        });
    },
    []
  );

  return { isCopied, handleCopyEmail };
}