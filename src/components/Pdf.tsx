import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const Pdf = () => {
  const MyDocument: any = Document;
  const MyPage: any = Page;
  return (
    <MyDocument>
      <MyPage size="A4">
        <View>
          <Text>Section #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </MyPage>
    </MyDocument>
  );
};

export default Pdf;
