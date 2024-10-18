const usePost = () => {
  // const handleLike = (id: number) => {
  // handle post request for like
  // }

  const formatNumbers = (comment: number) => {
    if (comment >= 1000) {
      if (comment.toString().charAt(1) != "0")
        return (
          comment.toString().charAt(0) +
          "." +
          comment.toString().charAt(1) +
          "k"
        );

      return comment.toString().charAt(0) + "k";
    }

    if (comment >= 1000) {
      return comment.toString().charAt(0) + "k";
    }

    return comment;
  };

  return {
    formatNumbers,
  };
};

export default usePost;
