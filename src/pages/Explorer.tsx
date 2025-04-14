import React, { useState } from 'react';
import styled from 'styled-components';

// Types
type ContentType = 'movie' | 'series' | 'person' | 'list';

interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  imageUrl: string;
  year?: number;
  rating?: number;
  genres?: string[];
  user?: {
    name: string;
    avatar: string;
  };
}

interface FilterOption {
  id: string;
  label: string;
  type: ContentType | 'all';
}

// Styled components
const ExplorerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  overflow: hidden; // Prevent container from causing scroll
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #000;
  margin: 0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  padding: 8px 15px;
  width: 300px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  input {
    background: transparent;
    border: none;
    color: #333;
    width: 100%;
    padding: 5px;
    outline: none;
    font-size: 1rem;
  }

  svg {
    margin-right: 10px;
    color: #777;
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  width: 100%;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? '#e50914' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background: ${({ active }) => (active ? '#f40612' : '#f5f5f5')};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const ContentCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

const ContentImage = styled.div<{ imageUrl: string }>`
  height: 280px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const RatingBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  svg {
    color: #ffd700;
    margin-right: 3px;
  }
`;

const ContentInfo = styled.div`
  padding: 15px;
`;

const ContentTitle = styled.h3`
  color: #333;
  margin: 0 0 5px 0;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 8px;
`;

const ContentGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

const GenreTag = styled.span`
  background: #f0f0f0;
  color: #555;
  padding: 3px 8px;
  border-radius: 10px;
  font-size: 0.7rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #eee;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
  }

  span {
    color: #666;
    font-size: 0.8rem;
  }
`;

// Using actual movie/TV show images from a free API
// ... (previous imports and types remain the same)

// Updated fakeContent array with all working images
const fakeContent: ContentItem[] = [
    {
      id: '1',
      title: 'Dune: Part Two',
      type: 'movie',
      imageUrl: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
      year: 2024,
      rating: 4.8,
      genres: ['Sci-Fi', 'Adventure'],
      user: {
        name: 'cinemalover42',
        avatar: 'https://ui-avatars.com/api/?name=Cinemalover&background=random',
      },
    },
    {
      id: '2',
      title: 'The Last of Us',
      type: 'series',
      imageUrl: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      year: 2023,
      rating: 4.7,
      genres: ['Drama', 'Action', 'Horror'],
      user: {
        name: 'gamertom',
        avatar: 'https://ui-avatars.com/api/?name=Gamertom&background=random',
      },
    },
    {
      id: '3',
      title: 'Christopher Nolan',
      type: 'person',
      imageUrl: 'https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg',
      user: {
        name: 'filmstudent',
        avatar: 'https://ui-avatars.com/api/?name=Filmstudent&background=random',
      },
    },
    {
      id: '4',
      title: 'Best Sci-Fi Movies',
      type: 'list',
      imageUrl: 'https://image.tmdb.org/t/p/w500/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg', // Blade Runner 2049 image
      user: {
        name: 'scifigeek',
        avatar: 'https://ui-avatars.com/api/?name=Scifigeek&background=random',
      },
    },
    {
      id: '5',
      title: 'Oppenheimer',
      type: 'movie',
      imageUrl: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      year: 2023,
      rating: 4.6,
      genres: ['Biography', 'Drama', 'History'],
      user: {
        name: 'historybuff',
        avatar: 'https://ui-avatars.com/api/?name=Historybuff&background=random',
      },
    },
    {
      id: '6',
      title: 'Succession',
      type: 'series',
      imageUrl: 'https://image.tmdb.org/t/p/w500/5n2a4kWujMfxk5LTHYv0vKTQNox.jpg',
      year: 2018,
      rating: 4.9,
      genres: ['Drama'],
      user: {
        name: 'tvcritic',
        avatar: 'https://ui-avatars.com/api/?name=Tvcritic&background=random',
      },
    },
    {
      id: '7',
      title: 'Denis Villeneuve',
      type: 'person',
      imageUrl: 'https://image.tmdb.org/t/p/w500/9NsR4HREs4b7Qy5rHBSImYHiMXy.jpg', // New working image
      user: {
        name: 'directorfan',
        avatar: 'https://ui-avatars.com/api/?name=Directorfan&background=random',
      },
    },
    {
      id: '8',
      title: 'Horror Movies',
      type: 'list',
      imageUrl: 'https://image.tmdb.org/t/p/w500/4XLZS2xvdv5rxizzTUVREtRyw95.jpg', // The Conjuring image
      user: {
        name: 'horrorfanatic',
        avatar: 'https://ui-avatars.com/api/?name=Horrorfan&background=random',
      },
    },
    {
      id: '9',
      title: 'Interstellar',
      type: 'movie',
      imageUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', // Additional movie
      year: 2014,
      rating: 4.8,
      genres: ['Sci-Fi', 'Adventure'],
      user: {
        name: 'spacefan',
        avatar: 'https://ui-avatars.com/api/?name=Spacefan&background=random',
      },
    }
  ];
  
  // ... (rest of the code remains the same)

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'All', type: 'all' },
  { id: 'movies', label: 'Movies', type: 'movie' },
  { id: 'series', label: 'TV Series', type: 'series' },
  { id: 'people', label: 'People', type: 'person' },
  { id: 'lists', label: 'Lists', type: 'list' },
  { id: 'trending', label: 'Trending', type: 'all' },
  { id: 'recent', label: 'Recently Added', type: 'all' },
  { id: 'highest-rated', label: 'Highest Rated', type: 'all' },
];

// Component
const ExplorerPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredContent = fakeContent.filter((item) => {
    // Filter by type
    const typeMatch =
      activeFilter === 'all' || item.type === activeFilter || filterOptions.find((f) => f.id === activeFilter)?.type === 'all';
    
    // Filter by search query
    const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    return typeMatch && searchMatch;
  });

  return (
    <ExplorerContainer>
      <Header>
        <Title>Explore</Title>
        <SearchBar>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          <input
            type="text"
            placeholder="Search movies, series, people..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
      </Header>

      <FilterBar>
        {filterOptions.map((option) => (
          <FilterButton
            key={option.id}
            active={activeFilter === option.id}
            onClick={() => setActiveFilter(option.id)}
          >
            {option.label}
          </FilterButton>
        ))}
      </FilterBar>

      <ContentGrid>
        {filteredContent.map((item) => (
          <ContentCard key={item.id}>
            <ContentImage imageUrl={item.imageUrl}>
              {(item.rating || item.rating === 0) && (
                <RatingBadge>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                  {item.rating.toFixed(1)}
                </RatingBadge>
              )}
            </ContentImage>
            <ContentInfo>
              <ContentTitle>{item.title}</ContentTitle>
              <ContentMeta>
                {item.year && <span>{item.year}</span>}
                {item.type && <span>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>}
              </ContentMeta>
              {item.genres && (
                <ContentGenres>
                  {item.genres.slice(0, 2).map((genre) => (
                    <GenreTag key={genre}>{genre}</GenreTag>
                  ))}
                  {item.genres.length > 2 && <GenreTag>+{item.genres.length - 2}</GenreTag>}
                </ContentGenres>
              )}
              {item.user && (
                <UserInfo>
                  <img src={item.user.avatar} alt={item.user.name} />
                  <span>{item.user.name}</span>
                </UserInfo>
              )}
            </ContentInfo>
          </ContentCard>
        ))}
      </ContentGrid>
    </ExplorerContainer>
  );
};

export default ExplorerPage;