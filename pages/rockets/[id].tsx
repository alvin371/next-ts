import type { NextPage } from "next";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { useRouter } from "next/router";
import { useSingleRecipes } from "../../modules/Rockets/hook";


const Details: NextPage = () => {
    const router = useRouter()
    const { id } = router.query
    const { isLoading, isError, data: rocket, error } = useSingleRecipes(id as string)

    return (
        <>
            <Navbar />
            <div className="flex flex-row mx-auto justify-center my-28">
                <div className="mt-8 space-y-4">
                    <div>
                        <p className="text-gray-500">Company</p>
                        <p className="text-lg">{rocket?.company}</p>
                    </div>
                    <div>
                        <p className="text-gray-500">Description</p>
                        <p className="text-lg">{rocket?.description}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Details;