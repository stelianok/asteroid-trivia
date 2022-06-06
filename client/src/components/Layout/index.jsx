import { AppLayout } from "./styles";
import NavigationBar from "./NavigationBar";

export default function Layout({ children, refs }) {
  return (
    <AppLayout header={<NavigationBar refs={refs} />}>
      {children}
    </AppLayout>
  );
}
