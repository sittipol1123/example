interface Props {
  children: String | JSX.Element | JSX.Element[];
}

const UserChildren = ({ children }: Props) => {
  return (
    <>
      <div>อะไรก็ได้ โง่ๆ</div>
      {children}
    </>
  );
};

export default UserChildren;
