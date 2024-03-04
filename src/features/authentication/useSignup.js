import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { isLoading, mutate: signUp } = useMutation({
    mutationFn: signUpApi,

    onSuccess: () =>
      toast.success(
        "Account succesfully created! Please verify the new account from the user's email address."
      ),
  });

  return { isLoading, signUp };
}

export default useSignup;
