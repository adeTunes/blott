import React from 'react';
import { render, screen } from '@testing-library/react';
import { NewsCard } from '@/components/home/news-card';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

// Mock assets
jest.mock('@/lib/assets', () => ({
  images: {
    news1: { src: '/news-1.jpg' }
  }
}));

const mockNewsItem: MarketNews = {
  id: 1,
  category: 'top news',
  datetime: 1640995200, // Jan 1, 2022
  headline: 'Test Market News Headline',
  image: 'https://example.com/test-image.jpg',
  related: '',
  source: 'Test Source',
  summary: 'This is a test summary',
  url: 'https://example.com/test-article'
};

describe('NewsCard Component', () => {
  it('renders news card with correct information', () => {
    render(<NewsCard {...mockNewsItem} />);
    
    // Check if headline is rendered
    expect(screen.getByText('Test Market News Headline')).toBeInTheDocument();
    
    // Check if source is rendered
    expect(screen.getByText('Test Source')).toBeInTheDocument();
    
    // Check if summary is rendered
    expect(screen.getByText('This is a test summary')).toBeInTheDocument();
    
    // Check if link has correct href
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com/test-article');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('formats date correctly', () => {
    render(<NewsCard {...mockNewsItem} />);
    
    // Check if formatted date is rendered (should be "January 1, 2022")
    expect(screen.getByText('January 1, 2022')).toBeInTheDocument();
  });

  it('renders image with correct attributes', () => {
    render(<NewsCard {...mockNewsItem} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Market News Headline');
  });
});
