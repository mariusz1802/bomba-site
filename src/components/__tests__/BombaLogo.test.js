import React from 'react';
import Chapter from '../Chapter/Chapter';
import { render, screen } from '@testing-library/react';
import imageTest from '../../assets/images/offerImages/website.jpg';
import imageAviffTest from '../../assets/images/offerImages/website.avif';

describe('BombaLogo component', () => {
  it('Should render Chapter component', () => {
    render(
      <Chapter
        title="Test title"
        description="Test description"
        subtitle="Test subtitle"
        src={imageTest}
        srcSet={imageAviffTest}
      />
    );
    const logoElement = screen.getByRole('img');
    expect(logoElement).toHaveAttribute('src', 'website.jpg');
  });
});
