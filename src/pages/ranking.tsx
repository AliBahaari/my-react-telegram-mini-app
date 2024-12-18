import Default from "@/components/layout/default";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { thousandCommaSeparator } from "@/lib/utils";

function Ranking() {
  const first15Ranking = [
    {
      rank: 1,
      name: "blah blah",
      amount: 636737987,
    },
    {
      rank: 2,
      name: "blah blah",
      amount: 626737987,
    },
    {
      rank: 3,
      name: "blah blah",
      amount: 616737987,
    },
    {
      rank: 4,
      name: "blah blah",
      amount: 606737987,
    },
    {
      rank: 5,
      name: "blah blah",
      amount: 536737900,
    },
  ];

  const yourRankWithOthers = [
    {
      rank: 1201,
      name: "blah blah",
      amount: 636737987,
    },
    {
      rank: 1202,
      name: "blah blah",
      amount: 626737987,
    },
    {
      rank: 1203,
      name: "your name",
      amount: 616737987,
    },
    {
      rank: 1204,
      name: "blah blah",
      amount: 606737987,
    },
    {
      rank: 1205,
      name: "blah blah",
      amount: 536737900,
    },
  ];
  return (
    <Default>
      <div className="flex flex-col gap-6 mt-6">
        <Table className="border-black border-2">
          <TableBody>
            {first15Ranking.map((participant, index) => (
              <TableRow key={index}>
                <TableCell>
                  {participant.rank}.{participant.name}
                </TableCell>
                <TableCell className="text-right">
                  {thousandCommaSeparator(participant.amount)} TGM
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table className="border-black border-2">
          <TableBody>
            {yourRankWithOthers.map((participant, index) => (
              <TableRow key={index}>
                <TableCell>
                  {participant.rank}.{participant.name}
                </TableCell>
                <TableCell className="text-right">
                  {thousandCommaSeparator(participant.amount)} TGM
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Default>
  );
}

export default Ranking;
