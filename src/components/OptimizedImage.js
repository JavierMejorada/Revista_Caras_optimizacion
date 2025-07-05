import React from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  sizes = '(max-width: 768px) 100vw, 50vw'
}) => {
  const baseSrc = src.replace(/\.(jpg|jpeg|png)$/i, '');
  const ext = src.split('.').pop()?.toLowerCase();

  return (
    <picture>
      {/* Fuente AVIF (mejor compresión) */}
      <source 
        srcSet={`${baseSrc}.avif`} 
        type="image/avif"
        sizes={sizes}
      />
      {/* Fuente WebP (compatibilidad más amplia) */}
      <source
        srcSet={`${baseSrc}.webp`}
        type="image/webp"
        sizes={sizes}
      />
      {/* Imagen original como fallback */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={className}
        style={{
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover'
        }}
      />
    </picture>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  sizes: PropTypes.string
};

export default OptimizedImage;