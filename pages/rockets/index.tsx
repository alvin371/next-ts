import type { NextPage } from "next";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link"
import { useAllRecipes } from "../../modules/Rockets/hook";

const Recipes: NextPage = () => {
    const { isLoading, isError, data: rockets, error } = useAllRecipes()
    return (
        <>
            <Navbar />
            {/* Breadcrumb */}
            <div className="flex mx-auto justify-center">
                <div className="flex items-center py-4 overflow-y-auto whitespace-nowrap">
                    <Link href="/" >
                        <span className="text-gray-600 dark:text-gray-200">
                            Home
                        </span>
                    </Link>

                    <span className="mx-5 text-gray-500 dark:text-gray-300">
                        /
                    </span>

                    <p className="text-gray-600 dark:text-gray-200 hover:underline">
                        Rockets
                    </p>
                </div>

            </div>
            <div className="flex mx-auto justify-center mb-16">
                <h1 className="text-7xl font-black text-gray-600">List of Rockets</h1>
            </div>

            {/* Content */}
            <div className="flex flex-wrap mx-auto justify-center">
                {isLoading ? (
                    <span>Loading....</span>
                ) : isError ? (
                    <span>ErrorL {error.message}</span>
                ) : (rockets?.map(value => (
                    <p className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm mx-4 basis-1/4" key={value.rocket_id}>
                        {/* <img className="object-cover w-full h-56" src={value.thumb} alt="" /> */}
                        <div className="p-6">
                            <h5 className="text-xl font-bold">
                                {value.rocket_name}
                            </h5>
                            <p className="mt-2 text-sm text-gray-500">
                                {value.description}
                            </p>
                            <div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500">
                                <Link href={`/rockets/${value.rocket_id}`}>
                                    Lihat Detail Rockets
                                </Link>
                                <span aria-hidden="true">&rarr;</span>
                            </div>
                        </div>
                    </p>
                )))}
            </div>
            <Footer />
        </>
    );
}

export default Recipes;