import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Building our Rocketss
              <strong className="font-extrabold text-red-700 sm:block">
                Increase Conversion.
              </strong>
            </h1>

            <p className="mt-4 sm:leading-relaxed sm:text-xl">
              Trying to learn next js, here are some features that I have learned
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/get-started">
                <span className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring">
                  Get Started
                </span>
              </Link>

              <Link href="/about">
                <span className="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring" >
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
