import { APP_NAME } from '@ig/constants/app';
import Link from 'next/link';
import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <nav className="container mx-auto px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">{APP_NAME}</Link>
        </div>
        <div className="hidden space-x-4 lg:flex">
          <Link href="/filter" className="hover:underline">
            Filter
          </Link>
          <Link href="/ocr" className="hover:underline">
            OCR
          </Link>
          <Link href="/qrcode" className="hover:underline">
            QRCode
          </Link>
        </div>
      </div>
    </nav>
  );
};
