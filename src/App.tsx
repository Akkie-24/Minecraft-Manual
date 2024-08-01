import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import ParticipantList from './components/ParticipantList';
import JoinMethods from './components/JoinMethods';
import './App.css';

interface Participant {
    displayName: string;
    gamerTag: string;
}

const App: React.FC = () => {
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [showJoinMethods, setShowJoinMethods] = useState(false);

    const handleRegister = (displayName: string, gamerTag: string) => {
        setParticipants([...participants, { displayName, gamerTag }]);
        setShowJoinMethods(true);
    };

    return (
        <div className="App">
            <h1>Minecraft参加型サイト</h1>
            {!showJoinMethods && (
                <RegistrationForm onRegister={handleRegister} />
            )}
            <ParticipantList participants={participants} />
            <JoinMethods show={showJoinMethods} />
        </div>
    );
};

export default App;
