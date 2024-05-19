import { ClipboardEvent, KeyboardEvent } from 'react';

export const useInputRestrictions = (invalidChars: string[]) => {
    const hasInvalidCharacters = (text: string) => invalidChars.some((char) => text.includes(char));

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (hasInvalidCharacters(event.key)) {
            event.preventDefault();
        }
    };

    const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
        const paste = (event.clipboardData || window.Clipboard).getData('text');
        if (hasInvalidCharacters(paste)) {
            event.preventDefault();
        }
    };

    return {
        onKeyPress: handleKeyPress,
        onPaste: handlePaste,
    };
};
