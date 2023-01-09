import styles from "@styles/pages/SignIn.module.scss";
import commonStyles from "@componentStyles/auth/common.module.scss";
import { Fragment, useEffect } from "react";
import EmailForm from "@compontents/auth/SignIn/EmailForm";
import PasswordForm from "@compontents/auth/SignIn/PasswordForm";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthLayout from "@compontents/auth/AuthLayout";

enum FormType {
  EMAIL,
  PASSWORD,
}

type Props = {
  email: string;
  formType: FormType;
};

export default function SignIn({ email, formType }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (email && router.query.email) {
      router.replace("/signin", undefined, { shallow: true });
    }
  }, [email, router]);

  return (
    <AuthLayout>
      <form className={commonStyles.box}>
        <h1>Sign in</h1>
        {formType === FormType.EMAIL && <EmailForm />}
        {formType === FormType.PASSWORD && <PasswordForm email={email} />}
      </form>
      {formType === FormType.EMAIL && (
        <Fragment>
          <div className={styles.divider}>
            <h5>New to CampusConnect?</h5>
          </div>
          <div className={styles.createAccountWrapper}>
            <Link
              href="/register"
              className={`${commonStyles.buttonLinkWrapper} ${commonStyles.buttonWrapper}`}
            >
              <button className={commonStyles.button}>
                Create your CampusConnect account
              </button>
            </Link>
          </div>
        </Fragment>
      )}
    </AuthLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const email = context.query.email ?? "";
  let formType: FormType = FormType.EMAIL;
  if (email) {
    formType = FormType.PASSWORD;
  }

  return {
    props: { email, formType }, // will be passed to the page component as props
  };
}
