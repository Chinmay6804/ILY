// Function to calculate the days, hours, minutes, and seconds of love
function updateDaysOfLove() {
    const startDate = new Date('2024-07-16T20:26:00'); // Start date
    const now = new Date();
    const diffTime = Math.abs(now - startDate);

    // Calculate days, hours, minutes, and seconds
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    // Update the counter display
    const counterElement = document.getElementById('counter');
    counterElement.textContent = `You have been together for ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, and ${diffSeconds} seconds.`;
}

// Update the counter on page load and every second
document.addEventListener('DOMContentLoaded', () => {
    updateDaysOfLove();
    setInterval(updateDaysOfLove, 1000); // Update every second
});
