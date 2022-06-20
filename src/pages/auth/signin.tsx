import { getProviders, signIn } from "next-auth/react";

function SignIn({ providers }: { providers: any }) {
    return (
        <div>
            {Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                    <button
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
    );
}

export default SignIn;

export const getServerSideProps = async () => {
    const providers = await getProviders();

    return {
        props: { providers },
    };
};
