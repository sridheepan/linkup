import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useCurrency } from '../../contexts/CurrencyContext'; // Assuming CurrencyContext is in the same directory

// Flag URLs for all currencies
const flags = {
  USD: 'https://flagcdn.com/w320/us.png',
  AED: 'https://flagcdn.com/w320/ae.png',
  AFN: 'https://flagcdn.com/w320/af.png',
  ALL: 'https://flagcdn.com/w320/al.png',
  AMD: 'https://flagcdn.com/w320/am.png',
  ANG: 'https://flagcdn.com/w320/aw.png',
  AOA: 'https://flagcdn.com/w320/ao.png',
  ARS: 'https://flagcdn.com/w320/ar.png',
  AUD: 'https://flagcdn.com/w320/au.png',
  AWG: 'https://flagcdn.com/w320/aw.png',
  AZN: 'https://flagcdn.com/w320/az.png',
  BAM: 'https://flagcdn.com/w320/ba.png',
  BBD: 'https://flagcdn.com/w320/bb.png',
  BDT: 'https://flagcdn.com/w320/bd.png',
  BGN: 'https://flagcdn.com/w320/bg.png',
  BHD: 'https://flagcdn.com/w320/bh.png',
  BIF: 'https://flagcdn.com/w320/bi.png',
  BMD: 'https://flagcdn.com/w320/bm.png',
  BND: 'https://flagcdn.com/w320/bn.png',
  BOB: 'https://flagcdn.com/w320/bo.png',
  BRL: 'https://flagcdn.com/w320/br.png',
  BSD: 'https://flagcdn.com/w320/bs.png',
  BTN: 'https://flagcdn.com/w320/bt.png',
  BWP: 'https://flagcdn.com/w320/bw.png',
  BYN: 'https://flagcdn.com/w320/by.png',
  BZD: 'https://flagcdn.com/w320/bz.png',
  CAD: 'https://flagcdn.com/w320/ca.png',
  CDF: 'https://flagcdn.com/w320/cd.png',
  CHF: 'https://flagcdn.com/w320/ch.png',
  CLP: 'https://flagcdn.com/w320/cl.png',
  CNY: 'https://flagcdn.com/w320/cn.png',
  COP: 'https://flagcdn.com/w320/co.png',
  CRC: 'https://flagcdn.com/w320/cr.png',
  CUP: 'https://flagcdn.com/w320/cu.png',
  CVE: 'https://flagcdn.com/w320/cv.png',
  CZK: 'https://flagcdn.com/w320/cz.png',
  DJF: 'https://flagcdn.com/w320/dj.png',
  DKK: 'https://flagcdn.com/w320/dk.png',
  DOP: 'https://flagcdn.com/w320/do.png',
  DZD: 'https://flagcdn.com/w320/dz.png',
  EGP: 'https://flagcdn.com/w320/eg.png',
  ERN: 'https://flagcdn.com/w320/er.png',
  ETB: 'https://flagcdn.com/w320/et.png',
  EUR: 'https://flagcdn.com/w320/eu.png',
  FJD: 'https://flagcdn.com/w320/fj.png',
  FKP: 'https://flagcdn.com/w320/fk.png',
  FOK: 'https://flagcdn.com/w320/fo.png',
  GBP: 'https://flagcdn.com/w320/gb.png',
  GEL: 'https://flagcdn.com/w320/ge.png',
  GGP: 'https://flagcdn.com/w320/gg.png',
  GHS: 'https://flagcdn.com/w320/gh.png',
  GIP: 'https://flagcdn.com/w320/gi.png',
  GMD: 'https://flagcdn.com/w320/gm.png',
  GNF: 'https://flagcdn.com/w320/gn.png',
  GTQ: 'https://flagcdn.com/w320/gt.png',
  GYD: 'https://flagcdn.com/w320/gy.png',
  HKD: 'https://flagcdn.com/w320/hk.png',
  HNL: 'https://flagcdn.com/w320/hn.png',
  HRK: 'https://flagcdn.com/w320/hr.png',
  HTG: 'https://flagcdn.com/w320/ht.png',
  HUF: 'https://flagcdn.com/w320/hu.png',
  IDR: 'https://flagcdn.com/w320/id.png',
  ILS: 'https://flagcdn.com/w320/il.png',
  IMP: 'https://flagcdn.com/w320/im.png',
  INR: 'https://flagcdn.com/w320/in.png',
  IQD: 'https://flagcdn.com/w320/iq.png',
  IRR: 'https://flagcdn.com/w320/ir.png',
  ISK: 'https://flagcdn.com/w320/is.png',
  JEP: 'https://flagcdn.com/w320/je.png',
  JMD: 'https://flagcdn.com/w320/jm.png',
  JOD: 'https://flagcdn.com/w320/jo.png',
  JPY: 'https://flagcdn.com/w320/jp.png',
  KES: 'https://flagcdn.com/w320/ke.png',
  KGS: 'https://flagcdn.com/w320/kg.png',
  KHR: 'https://flagcdn.com/w320/kh.png',
  KID: 'https://flagcdn.com/w320/ki.png',
  KMF: 'https://flagcdn.com/w320/km.png',
  KRW: 'https://flagcdn.com/w320/kr.png',
  KWD: 'https://flagcdn.com/w320/kw.png',
  KYD: 'https://flagcdn.com/w320/ky.png',
  KZT: 'https://flagcdn.com/w320/kz.png',
  LAK: 'https://flagcdn.com/w320/la.png',
  LBP: 'https://flagcdn.com/w320/lb.png',
  LKR: 'https://flagcdn.com/w320/lk.png',
  LRD: 'https://flagcdn.com/w320/lr.png',
  LSL: 'https://flagcdn.com/w320/ls.png',
  LYD: 'https://flagcdn.com/w320/ly.png',
  MAD: 'https://flagcdn.com/w320/ma.png',
  MDL: 'https://flagcdn.com/w320/md.png',
  MGA: 'https://flagcdn.com/w320/mg.png',
  MKD: 'https://flagcdn.com/w320/mk.png',
  MMK: 'https://flagcdn.com/w320/mm.png',
  MNT: 'https://flagcdn.com/w320/mn.png',
  MOP: 'https://flagcdn.com/w320/mo.png',
  MRU: 'https://flagcdn.com/w320/mr.png',
  MUR: 'https://flagcdn.com/w320/mu.png',
  MVR: 'https://flagcdn.com/w320/mv.png',
  MWK: 'https://flagcdn.com/w320/mw.png',
  MXN: 'https://flagcdn.com/w320/mx.png',
  MYR: 'https://flagcdn.com/w320/my.png',
  MZN: 'https://flagcdn.com/w320/mz.png',
  NAD: 'https://flagcdn.com/w320/na.png',
  NGN: 'https://flagcdn.com/w320/ng.png',
  NIO: 'https://flagcdn.com/w320/ni.png',
  NOK: 'https://flagcdn.com/w320/no.png',
  NPR: 'https://flagcdn.com/w320/np.png',
  NZD: 'https://flagcdn.com/w320/nz.png',
  OMR: 'https://flagcdn.com/w320/om.png',
  PAB: 'https://flagcdn.com/w320/pa.png',
  PEN: 'https://flagcdn.com/w320/pe.png',
  PGK: 'https://flagcdn.com/w320/pg.png',
  PHP: 'https://flagcdn.com/w320/ph.png',
  PKR: 'https://flagcdn.com/w320/pk.png',
  PLN: 'https://flagcdn.com/w320/pl.png',
  PYG: 'https://flagcdn.com/w320/py.png',
  QAR: 'https://flagcdn.com/w320/qa.png',
  RON: 'https://flagcdn.com/w320/ro.png',
  RSD: 'https://flagcdn.com/w320/rs.png',
  RUB: 'https://flagcdn.com/w320/ru.png',
  RWF: 'https://flagcdn.com/w320/rw.png',
  SAR: 'https://flagcdn.com/w320/sa.png',
  SBD: 'https://flagcdn.com/w320/sb.png',
  SCR: 'https://flagcdn.com/w320/sc.png',
  SDG: 'https://flagcdn.com/w320/sd.png',
  SEK: 'https://flagcdn.com/w320/se.png',
  SGD: 'https://flagcdn.com/w320/sg.png',
  SHP: 'https://flagcdn.com/w320/sh.png',
  SLE: 'https://flagcdn.com/w320/sl.png',
  SLL: 'https://flagcdn.com/w320/sl.png',
  SOS: 'https://flagcdn.com/w320/so.png',
  SRD: 'https://flagcdn.com/w320/sr.png',
  SSP: 'https://flagcdn.com/w320/ss.png',
  STN: 'https://flagcdn.com/w320/st.png',
  SYP: 'https://flagcdn.com/w320/sy.png',
  SZL: 'https://flagcdn.com/w320/sz.png',
  THB: 'https://flagcdn.com/w320/th.png',
  TJS: 'https://flagcdn.com/w320/tj.png',
  TMT: 'https://flagcdn.com/w320/tm.png',
  TND: 'https://flagcdn.com/w320/tn.png',
  TOP: 'https://flagcdn.com/w320/to.png',
  TRY: 'https://flagcdn.com/w320/tr.png',
  TTD: 'https://flagcdn.com/w320/tt.png',
  TVD: 'https://flagcdn.com/w320/tv.png',
  TWD: 'https://flagcdn.com/w320/tw.png',
  TZS: 'https://flagcdn.com/w320/tz.png',
  UAH: 'https://flagcdn.com/w320/ua.png',
  UGX: 'https://flagcdn.com/w320/ug.png',
  UYU: 'https://flagcdn.com/w320/uy.png',
  UZS: 'https://flagcdn.com/w320/uz.png',
  VES: 'https://flagcdn.com/w320/ve.png',
  VND: 'https://flagcdn.com/w320/vn.png',
  VUV: 'https://flagcdn.com/w320/vu.png',
  WST: 'https://flagcdn.com/w320/ws.png',
  XAF: 'https://flagcdn.com/w320/cf.png',
  XCD: 'https://flagcdn.com/w320/xk.png',
  XDR: 'https://flagcdn.com/w320/xk.png',
  XOF: 'https://flagcdn.com/w320/cf.png',
  XPF: 'https://flagcdn.com/w320/pf.png',
  YER: 'https://flagcdn.com/w320/ye.png',
  ZAR: 'https://flagcdn.com/w320/za.png',
  ZMW: 'https://flagcdn.com/w320/zm.png',
  ZWL: 'https://flagcdn.com/w320/zw.png',
};

export function CurrencySwitcher({ scrolled, showFullText }) {
  const { currency, setCurrency, rates, ratesFetched } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    setIsOpen(false);
  };

  return (
    <div className={`border-2 border-grey100  rounded-full hover:border-primaryMain`}>
      {/* Button to show current selected currency */}
      <button
        onClick={toggleDropdown}
        className='flex items-center px-4 py-2 text-sm focus:outline-none transition-all duration-500 text-secondaryDark'>
        <img src={flags[currency]} alt={currency} className='w-6 h-5 mr-2 rounded-md' />
        <span className={`font-bold ${scrolled ? 'text-main' : 'text-paper'}`}>
          {showFullText
            ? currency === 'USD'
              ? 'USD'
              : currency === 'EUR'
              ? 'Euro'
              : currency
            : currency}
        </span>
        {/* Show down arrow when closed, up arrow when open */}
        {/* {isOpen ? (
          <FaChevronUp className='ml-2 transition-all duration-500' />
        ) : (
          <FaChevronDown className='ml-2 transition-all duration-500' />
        )} */}
      </button>

      {/* Dropdown menu */}
      {isOpen && ratesFetched && (
        <div className='absolute z-10 mt-1 bg-paper w-[5.8rem] h-[300px] bg-white rounded-lg shadow-lg overflow-auto text-secondaryDark '>
          {Object.keys(rates).map((currencyCode) => (
            <button
              key={currencyCode}
              onClick={() => handleCurrencyChange(currencyCode)}
              className='flex items-center px-4 py-2 text-sm w-full hover:bg-primaryMain hover:text-bgWhite transition-all duration-200'>
              <img
                src={flags[currencyCode]}
                alt={currencyCode}
                className='w-6 h-5 mr-2 rounded-md object-fit'
              />
              <span>{showFullText ? currencyCode : currencyCode.slice(0, 2)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
