import { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

const BOT_BLURB = 'Hello! I can help with orders, business hours, or connecting you with support.';

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 'bot-intro', sender: 'bot', text: BOT_BLURB }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isSending, setIsSending] = useState(false);
    const messagesRef = useRef(null);

    useEffect(() => {
        if (open && messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages, open]);

    const sendMessage = async (event) => {
        event?.preventDefault();
        const trimmed = inputValue.trim();
        if (!trimmed) return;

        const userMessage = { id: `user-${Date.now()}`, sender: 'user', text: trimmed };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsSending(true);

        try {
            const response = await fetch('/chat/api/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: trimmed })
            });

            if (!response.ok) {
                throw new Error('backend responded with an error');
            }

            const data = await response.json();
            const reply = data?.reply ?? data?.message ?? 'I could not process that. Please try again.';
            setMessages((prev) => [...prev, { id: `bot-${Date.now()}`, sender: 'bot', text: reply }]);
        } catch (error) {
            console.error('ChatWidget: failed to send message', error);
            setMessages((prev) => [
                ...prev,
                {
                    id: `bot-error-${Date.now()}`,
                    sender: 'bot',
                    text: 'Something went wrong on our side. Please try again in a moment.'
                }
            ]);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className={`chat-widget ${open ? 'chat-widget-open' : ''}`} aria-live="polite">
            <button
                type="button"
                className="chat-toggle"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-label="Open support chat"
            >
                <div className="chat-toggle-avatar">
                    <span className="chat-badge" aria-hidden="true" />
                </div>
                <div className="chat-toggle-content">
                    <span>AI Assistant</span>
                    <small>Online</small>
                </div>
                <div className="chat-toggle-icon" aria-hidden="true">
                    {open ? '✕' : '+'}
                </div>
            </button>

            <div className="chat-panel" role="dialog" aria-label="Chatbot window">
                <header className="chat-header">
                    <div>
                        <p className="chat-title">AI Assistant</p>
                        <p className="chat-subtitle">How can I help you?</p>
                    </div>
                    <span className="chat-dot" />
                </header>

                <div className="chat-messages" ref={messagesRef}>
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`chat-message ${message.sender === 'user' ? 'chat-message-user' : 'chat-message-bot'}`}
                        >
                            <p>{message.text}</p>
                        </div>
                    ))}
                    {isSending && (
                        <div className="chat-message chat-message-bot chat-typings">
                            <span />
                            <span />
                            <span />
                        </div>
                    )}
                </div>

                <form className="chat-input" onSubmit={sendMessage}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                        disabled={isSending}
                        aria-label="Type your message"
                    />
                    <button type="submit" disabled={isSending || !inputValue.trim()}>
                        {isSending ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatWidget;

