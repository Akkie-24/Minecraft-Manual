import React, { useState } from 'react';

interface Props {
    onRegister: (displayName: string, gamerTag: string) => void;
}

const RegistrationForm: React.FC<Props> = ({ onRegister }) => {
    const [displayName, setDisplayName] = useState('');
    const [gamerTag, setGamerTag] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onRegister(displayName, gamerTag);
        setDisplayName('');
        setGamerTag('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="displayName">チャンネルの表示名:</label>
            <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
            />
            <br />
            <label htmlFor="gamerTag">ゲーマータグ:</label>
            <input
                type="text"
                id="gamerTag"
                value={gamerTag}
                onChange={(e) => setGamerTag(e.target.value)}
                required
            />
            <br />
            <button type="submit">登録</button>
        </form>
    );
};

export default RegistrationForm;
