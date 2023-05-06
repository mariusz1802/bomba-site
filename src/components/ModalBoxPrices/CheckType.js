import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ModalBoxPrices from './ModalBoxPrices';

export default function CheckType({ type, onClose }) {
  const { t, i18n } = useTranslation();

  const logoInit = [
    {
      type: 'tocheck',
      checked: false,
      name: 'rights',
      text: t('rightsLogo.text'),
      price: 200,
    },
    {
      type: 'prices',
      name: 'promoMonth',
      text: t('projectAmount.text'),
      price: 300,
      value: 1,
      counter: 0,
      max: 5,
      min: 1,
    },
  ];

  const websiteInit = [
    {
      type: 'tocheck',
      checked: false,
      name: 'websiteLogo',
      text: t('websiteLogo.text'),
      price: 300,
    },
    {
      type: 'tocheck',
      checked: false,
      name: 'websiteText',
      text: t('websiteText.text'),
      price: 400,
    },
    {
      type: 'prices',
      name: 'projectsAmount',
      text: t('websitePage.text'),
      price: 200,
      value: 0,
      counter: 0,
      max: 10,
      min: 0,
    },
  ];

  const shopInit = [
    {
      type: 'tocheck',
      checked: false,
      name: 'shopLogo',
      text: t('shopLogo.text'),
      price: 300,
    },
    {
      type: 'tocheck',
      checked: false,
      name: 'shopPhoto',
      text: t('shopPhoto.text'),
      price: 300,
    },
    {
      type: 'tocheck',
      checked: false,
      name: 'shopText',
      text: t('shopText.text'),
      price: 500,
    },
    {
      type: 'prices',
      name: 'shopProduct',
      text: t('shopProduct.text'),
      price: 200,
      value: 10,
      counter: 0,
      max: 100,
      min: 10,
    },
    {
      type: 'prices',
      name: 'shopPage',
      text: t('shopPage.text'),
      price: 200,
      value: 0,
      counter: 0,
      max: 10,
      min: 1,
    },
  ];

  const promoInit = [
    {
      type: 'tocheck',
      checked: false,
      name: 'promoFacebook',
      text: t('promoFacebook.text'),
      price: 300,
    },
    {
      type: 'tocheck',
      checked: false,
      name: 'promoGoogle',
      text: t('promoGoogle.text'),
      price: 300,
    },
    {
      type: 'tocheck',
      checked: false,
      name: 'promoInstagram',
      text: t('promoInstagram.text'),
      price: 300,
    },
    {
      type: 'tocheck',
      checked: false,
      name: 'promoSEO',
      text: t('promoSEO.text'),
      price: 300,
    },
  ];

  // Logo
  const [logoPrice, setLogoPrice] = useState(500);
  const [logo, setLogo] = useState([
    {
      type: 'tocheck',
      checked: false,
      name: 'rights',
      text: t('rightsLogo.text'),
      price: 200,
    },
    {
      type: 'prices',
      name: 'promoMonth',
      text: t('projectAmount.text'),
      price: 300,
      value: 1,
      counter: 0,
      max: 5,
      min: 1,
    },
  ]);

  // Website`
  const [websitePrice, setWebsitePrice] = useState(1500);
  const [website, setWebsite] = useState(websiteInit);
  // Shop
  const [shopPrice, setShopPrice] = useState(3500);
  const [shop, setShop] = useState(shopInit);

  // Promo
  const [promoPrice, setPromoPrice] = useState(800);
  const [promo, setPromo] = useState(promoInit);

  //effect for languange change
  useEffect(() => {
    setLogo(logoInit);
    setWebsite(websiteInit);
    setShop(shopInit);
    setPromo(promoInit);
  }, [i18n.language]);

  switch (type) {
    case 'logo':
      return (
        <ModalBoxPrices
          modalName="logo"
          type={logo}
          action={setLogo}
          onClose={onClose}
          price={logoPrice}
          setPrice={setLogoPrice}
        />
      );
    case 'website':
      return (
        <ModalBoxPrices
          modalName="website"
          type={website}
          action={setWebsite}
          onClose={onClose}
          price={websitePrice}
          setPrice={setWebsitePrice}
        />
      );
    case 'shop':
      return (
        <ModalBoxPrices
          modalName="shop"
          type={shop}
          action={setShop}
          onClose={onClose}
          price={shopPrice}
          setPrice={setShopPrice}
        />
      );
    case 'promo':
      return (
        <ModalBoxPrices
          modalName="promo"
          type={promo}
          action={setPromo}
          onClose={onClose}
          price={promoPrice}
          setPrice={setPromoPrice}
        />
      );
    default:
      return null;
  }
}

CheckType.propTypes = {
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
