import { Divider } from '@ig/components/Divider';
import { Navbar } from '@ig/components/Navbar';
import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <Divider />
        <div className="flex h-full grow items-center justify-center">
          <div className="flex flex-col gap-4">
            <Link href="/filter">
              <button className="btn btn-primary w-full" type="button">
                Filter
              </button>
            </Link>
            <Link href="/ocr">
              <button className="btn btn-primary w-full" type="button">
                OCR
              </button>
            </Link>
            <Link href="/qrcode">
              <button className="btn btn-primary w-full" type="button">
                QRCode
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
