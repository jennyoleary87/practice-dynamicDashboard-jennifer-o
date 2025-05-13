let premium = false;

export default function PremiumMessage() {
    return (
        <p>{premium ? 'Thank you for being a premium member!' : 'Upgrade to premium to enjoy exclusive features!'}</p>
    );
}

