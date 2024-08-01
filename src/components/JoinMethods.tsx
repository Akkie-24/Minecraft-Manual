import React from 'react';

interface Props {
    show: boolean;
}

const JoinMethods: React.FC<Props> = ({ show }) => {
    if (!show) return null;

    return (
        <div>
            <h2>参加方法</h2>
            <p>
                Switch・PS4・PS5の場合: <a href="https://novablog.work/be-join-any-server/">こちら</a>
            </p>
            <p>
                PC・スマホ・XBOXの場合: <a href="https://games.xserver.ne.jp/minecraft-media/minecraft-how-to-connect/">こちら</a>
            </p>
        </div>
    );
};

export default JoinMethods;
