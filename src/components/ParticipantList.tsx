import React from 'react';

interface Participant {
    displayName: string;
    gamerTag: string;
}

interface Props {
    participants: Participant[];
}

const ParticipantList: React.FC<Props> = ({ participants }) => {
    return (
        <div>
            <h2>登録済みの参加者一覧</h2>
            <ul>
                {participants.map((participant, index) => (
                    <li key={index}>
                        {participant.displayName} ({participant.gamerTag})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ParticipantList;
