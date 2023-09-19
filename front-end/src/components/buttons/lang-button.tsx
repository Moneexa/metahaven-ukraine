import { useState, useEffect, useRef } from "react";
import { Flex, Text } from "@mantine/core";
import { useSearchParams } from "react-router-dom";

export function LangButton() {
  const [clicked, setClicked] = useState(false);
  const clickedRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showDropdown, setShowDropdown] = useState(true); // Added state for showing/hiding dropdown

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the value (100 in this case) as needed based on when you want to show the dropdown
      setShowDropdown(window.scrollY < 100);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        clickedRef.current &&
        !clickedRef.current.contains(event.target as Node)
      ) {
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clicked]);

  const onDropDownCick = () => {
    setClicked(!clicked);
  };

  const onSelectedLang = (languageSelected: string) => {
    const lang = languageSelected;
    setSearchParams({ lang });
    onDropDownCick();
  };
  return (
    <Flex align="start">
      <Flex
        style={{
          borderColor: "white",
          borderLeft: "2px solid",
          borderTop: "2px solid",
          borderBottom: "2px solid",
          padding: "2px 6px",
          color: "white",
        }}
      >
        LANGUAGE
      </Flex>
      <Flex direction="column">
        <Flex
          onClick={onDropDownCick}
          ref={clickedRef}
          style={{
            border: "2px solid white",
            padding: "2px 6px",
            color: "white",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {searchParams.get("lang") || "EN"}
          {clicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
            >
              <path d="M8 12L2.80385 3L13.1962 3L8 12Z" fill="white" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path d="M8 4L2 7.4641L2 0.535899L8 4Z" fill="white" />
            </svg>
          )}
        </Flex>
        {clicked && (
          <div
            style={{
              position: "fixed",
              top: "58px", // Adjust this value as needed
              left: "36",
              zIndex: "1",
              cursor: "pointer",
              display: showDropdown ? "flex" : "none",
            }}
          >
            <Flex direction="column" bg="white" py={5.5} pl={8} pr={26} w={19}>
              <Text
                fz={{ base: "14px", md: "16px" }}
                color="#451376"
                fw={700}
                onClick={() => onSelectedLang("EN")}
              >
                EN
              </Text>
              <Text
                fz={{ base: "14px", md: "16px" }}
                color="#451376"
                fw={700}
                onClick={() => onSelectedLang("FR")}
              >
                FR
              </Text>
              <Text
                fz={{ base: "14px", md: "16px" }}
                color="#451376"
                fw={700}
                onClick={() => onSelectedLang("UA")}
              >
                UA
              </Text>
              <Text
                fz={{ base: "14px", md: "16px" }}
                color="#451376"
                fw={700}
                onClick={() => onSelectedLang("ES")}
              >
                ES
              </Text>
            </Flex>
          </div>
        )}
      </Flex>
    </Flex>
  );
}
