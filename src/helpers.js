// Utility functions for the Tsako app

export const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
};

export const calculateSum = (a, b) => {
    return a + b;
};
