import { H3, H2, P, LinkWrapper } from "../UIWidgets";

const BlogItem = () => {
  return (
    <div className="mt-5 flex items-center text-left ">
      <img
        src="https://cdn.dribbble.com/users/1849025/avatars/normal/bc0fd70644f79ed3d41614e383c2fb8b.jpg?1635617901"
        className="w-24"
        alt="blog tag"
      />
      <div className="ml-7 truncate">
        <H3 className="max-h-20 text-ellipsis overflow-hidden">
          Find Us On LinkedinFind Us On LinkedinFind Us Find Us On Find Us On
          LinkedinFind Us On LinkedinFind Us Find Us On
        </H3>
        <P className="mt-2 ">28-8-2022</P>
      </div>
      <div className="ml-auto">
        <LinkWrapper link="/">
          <P className="whitespace-nowrap cursor-pointer">Read More</P>
        </LinkWrapper>
      </div>
    </div>
  );
};

export default BlogItem;
