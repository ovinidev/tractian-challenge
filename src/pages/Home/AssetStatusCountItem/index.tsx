import { Center, Stack, Text } from "@chakra-ui/react";

interface AssetStatusCountItemProps {
	title: string;
	statusCount?: number;
}

export const AssetStatusCountItem = ({
	title,
	statusCount,
}: AssetStatusCountItemProps) => {
	return (
		<Center
			as="section"
			h={{ base: "9rem", "7xl": "10rem" }}
			w={{ base: "16rem", "7xl": "17rem" }}
			borderRadius="10px"
			bg="primary"
		>
			<Stack transition="all 0.5s ease" align="center">
				<Text
					color="gray.100"
					fontWeight={700}
					fontSize={{ base: "24", "4xl": "26" }}
				>
					{title}: {statusCount}
				</Text>
			</Stack>
		</Center>
	);
};
