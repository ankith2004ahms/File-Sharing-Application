// This utility provides consistent spacing for pages with fixed header
export const getPageSpacing = () => {
  return {
    paddingTop: '5rem', // h-20 (5rem) for the header
    minHeight: 'calc(100vh - 5rem)' // Ensures content takes up at least the viewport height minus header
  };
};
