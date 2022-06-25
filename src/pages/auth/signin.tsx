import { getProviders, signIn } from "next-auth/react";

function SignIn({ providers }: { providers: any }) {
    return (
        <div className="mx-4 flex flex-col items-center justify-center">
            <div className="my-5 flex flex-grow items-center sm:flex-grow-0">
                <img
                    className="mx-auto w-28"
                    src="https://i.ibb.co/h1VT0LD/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-lo.jpg"
                    alt=""
                />
            </div>
            <div className="w-full space-y-6 rounded border border-gray-200 p-6 sm:w-[400px]">
                <p className="text-center text-2xl font-semibold">Sign In</p>
                {Object.values(providers).map((provider: any) => (
                    <div key={provider.name}>
                        <button
                            className="button w-full"
                            type="button"
                            onClick={() => {
                                signIn(provider.id, { callbackUrl: "/" });
                            }}
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SignIn;

export const getServerSideProps = async () => {
    const providers = await getProviders();

    return {
        props: { providers },
    };
};
