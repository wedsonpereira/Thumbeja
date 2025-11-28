// Ecommerce
import e_alpha_1 from '../imaging/e-commerce/alpha-masking/A2.jpg';
import e_alpha_2 from '../imaging/e-commerce/alpha-masking/B2.jpg';

import e_clip_1 from '../imaging/e-commerce/clippingpath/A1.jpg';
import e_clip_2 from '../imaging/e-commerce/clippingpath/B1.jpg';

import e_retouch_1 from '../imaging/e-commerce/retouching/A 17.jpg';
import e_retouch_2 from '../imaging/e-commerce/retouching/B 17.jpg';

import e_shadow_1 from '../imaging/e-commerce/shadow/A.jpg';
import e_shadow_2 from '../imaging/e-commerce/shadow/B.jpg';

// Fashion
import f_clip_1 from '../imaging/fashion/clippingpath/A 1.jpg';
import f_clip_2 from '../imaging/fashion/clippingpath/B 1.jpg';
import f_clip_3 from '../imaging/fashion/clippingpath/A 4.jpg';
import f_clip_4 from '../imaging/fashion/clippingpath/B 4.jpg';

import f_retoching_1 from '../imaging/fashion/retouching/A 11.jpg';
import f_retoching_2 from '../imaging/fashion/retouching/B 11.jpg';
import f_retouching_3 from '../imaging/fashion/retouching/A 22.jpg';
import f_retouching_4 from '../imaging/fashion/retouching/B 22.jpg';
import f_retouching_5 from '../imaging/fashion/retouching/A 23.jpg';
import f_retouching_6 from '../imaging/fashion/retouching/B 23.jpg';

import f_shadow_1 from '../imaging/fashion/shadow/A 5.jpg';
import f_shadow_2 from '../imaging/fashion/shadow/B 5.jpg';


// Jewellery

// retouching
import j_retouching_1 from '../imaging/jwellery/retouching/A 14.jpg';
import j_retouching_2 from '../imaging/jwellery/retouching/B 14.jpg';
import j_retouching_3 from '../imaging/jwellery/retouching/A 15.jpg';
import j_retouching_4 from '../imaging/jwellery/retouching/B 15.jpg';
import j_retouching_5 from '../imaging/jwellery/retouching/A 19.jpg';
import j_retouching_6 from '../imaging/jwellery/retouching/B 19.jpg';

// shadows
import j_shadows_1 from '../imaging/jwellery/shadow/A 16.jpg';
import j_shadows_2 from '../imaging/jwellery/shadow/B 16.jpg';
import j_shadows_3 from '../imaging/jwellery/shadow/A 20.jpg';
import j_shadows_4 from '../imaging/jwellery/shadow/B 20.jpg';

// real_estate



export const ecommerceImages = {
  'clipping-path': {
    images: [
      {
        before: e_clip_1,
        after: e_clip_2,
        title: 'Demonstration for Clipping Path',
        description:
          'This is where the visual demonstration or a detailed explanation for the selected subcategory would be displayed, showcasing its capabilities and benefits.'
      },
      {
        before: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
        title: 'Clipping Path Example 2',
        description: 'Another example showcasing the clipping path service with before and after comparison.'
      },
      {
        before: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop',
        title: 'Clipping Path Example 3',
        description: 'Professional clipping path service demonstration.'
      }
    ]
  },
  retouching: {
    images: [
      {
        before: e_retouch_1,
        after: e_retouch_2,
        title: 'Retouching Demonstration',
        description: 'Professional image retouching service showcasing before and after results.'
      },
      {
        before: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&sat=-20',
        title: 'Retouching Example 2',
        description: 'Another retouching example with enhanced details and quality.'
      }
    ]
  },
  shadow: {
    images: [
      {
        before: e_shadow_1,
        after: e_shadow_2,
        title: 'Shadow Creation Demonstration',
        description: 'Professional shadow creation service for product images.'
      }
    ]
  },
  'alpha-masking': {
    images: [
      {
        before: e_alpha_1,
        after: e_alpha_2,
        title: 'Alpha Masking Demonstration',
        description: 'Professional alpha masking service for complex image editing.'
      }
    ]
  }
};

export const fashionImages = {
  'clipping-path': {
    images: [
      {
        before:  f_clip_1,
        after: f_clip_2,
        title: 'Fashion Clipping Path',
        description: 'Professional clipping path service for fashion photography.'
      },
        {
        before:  f_clip_3,
        after: f_clip_4,
        title: 'Fashion Clipping Path',
        description: 'Professional clipping path service for fashion photography.'
      }
    ]
  },
  retouching: {
    images: [
      {
        before: f_retoching_1,
        after: f_retoching_2,
        title: 'Fashion Retouching',
        description: 'Professional retouching for fashion images.'
      },
        {
        before: f_retouching_3,
        after: f_retouching_4,
        title: 'Fashion Retouching',
        description: 'Professional retouching for fashion images.'
      },
        {
        before: f_retouching_5,
        after: f_retouching_6,
        title: 'Fashion Retouching',
        description: 'Professional retouching for fashion images.'
      }
    ]
  },
  shadow: {
    images: [
      {
        before: f_shadow_1 ,
        after: f_shadow_2 ,
        title: 'Fashion Shadow Creation',
        description: 'Shadow creation for fashion product images.'
      }
    ]
  },
  'alpha-masking': {
    images: [
      {
        before: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
        title: 'Fashion Alpha Masking',
        description: 'Alpha masking for fashion photography.'
      }
    ]
  }
};

export const jewelryImages = {
  'clipping-path': {
    images: [
      {
        before: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
        title: 'Jewelry Clipping Path',
        description: 'Precise clipping path service for jewelry photography.'
      }
    ]
  },
  retouching: {
    images: [
      {
        before: j_retouching_1,
        after: j_retouching_2,
        title: 'Jewelry Retouching',
        description: 'Professional retouching for jewelry images.'
      },
        {
        before:  j_retouching_3,
        after:  j_retouching_4,
        title: 'Jewelry Retouching',
        description: 'Professional retouching for jewelry images.'
      },
        {
        before: j_retouching_5,
        after: j_retouching_6,
        title: 'Jewelry Retouching',
        description: 'Professional retouching for jewelry images.'
      }
    ]
  },
  shadow: {
    images: [
      {
        before: j_shadows_1,
        after: j_shadows_2,
        title: 'Jewelry Shadow Creation',
        description: 'Realistic shadow creation for jewelry products.'
      },

      {
        before: j_shadows_3,
        after: j_shadows_4,
        title: 'Jewelry Shadow Creation',
        description: 'Realistic shadow creation for jewelry products.'
      },
    ]
  },
  'alpha-masking': {
    images: [
      {
        before: 'https://images.unsplash.com/photo-1603561596112-0a1323a4e1d2?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1603561596112-0a1323a4e1d2?w=800&h=600&fit=crop',
        title: 'Jewelry Alpha Masking',
        description: 'Alpha masking for jewelry photography.'
      }
    ]
  }
};

export const realEstateImages = {
  'clipping-path': {
    images: [
      {
        before: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        title: 'Real Estate Clipping Path',
        description: 'Clipping path service for real estate photography.'
      }
    ]
  },
  retouching: {
    images: [
      {
        before: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
        title: 'Real Estate Retouching',
        description: 'Professional retouching for real estate images.'
      }
    ]
  },
  shadow: {
    images: [
      {
        before: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        title: 'Real Estate Shadow Creation',
        description: 'Shadow creation for real estate photography.'
      }
    ]
  },
  'alpha-masking': {
    images: [
      {
        before: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
        after: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop',
        title: 'Real Estate Alpha Masking',
        description: 'Alpha masking for real estate images.'
      }
    ]
  }
};

const imageData = {
  'e-commerce': ecommerceImages,
  fashion: fashionImages,
  jewelry: jewelryImages,
  'real-estate': realEstateImages
};

export default imageData;

