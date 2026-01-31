import React, { useState } from "react";
import { FLIGHTS, ACCOMMODATIONS } from "../constants";
import {
  Plane,
  Building,
  Phone,
  AlertTriangle,
  Plus,
  Trash2,
  Calculator,
  Coins,
  Check,
  X,
  Pencil,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import TransportMapsView from "./TransportMapsView";

// --- Types for Local State ---
interface ExpenseItem {
  id: string;
  name: string;
  amount: number;
  category: string;
}

const DEFAULT_EXPENSES: ExpenseItem[] = [
  { id: "1", name: "機票 (預付)", amount: 15000, category: "交通" },
  { id: "2", name: "住宿 (預付)", amount: 25000, category: "住宿" },
  { id: "3", name: "租車預算", amount: 8000, category: "交通" },
  { id: "4", name: "迪士尼門票", amount: 2500, category: "娛樂" },
];

const COLORS = ["#E06A6A", "#5B6C8C", "#8A9A5B", "#F0AAB8", "#E6C229"];

interface UtilitiesViewProps {
  viewMode: "info" | "wallet" | "maps";
}

const UtilitiesView: React.FC<UtilitiesViewProps> = ({ viewMode }) => {
  // --- Wallet State ---
  const [expenses, setExpenses] = useState<ExpenseItem[]>(DEFAULT_EXPENSES);
  const [newItemName, setNewItemName] = useState("");
  const [newItemAmount, setNewItemAmount] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("餐飲");

  // --- Editing State ---
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");

  // --- Currency Converter State ---
  const [jpyAmount, setJpyAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState(0.215); // Default JPY to TWD

  const handleAddExpense = () => {
    if (!newItemName || !newItemAmount) return;
    const newExpense: ExpenseItem = {
      id: Date.now().toString(),
      name: newItemName,
      amount: parseFloat(newItemAmount),
      category: newItemCategory,
    };
    setExpenses([...expenses, newExpense]);
    setNewItemName("");
    setNewItemAmount("");
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const handleStartEdit = (item: ExpenseItem) => {
    setEditingId(item.id);
    setEditName(item.name);
    setEditAmount(item.amount.toString());
  };

  const handleSaveEdit = (id: string) => {
    if (!editName || !editAmount) return;

    setExpenses(
      expenses.map((item) =>
        item.id === id
          ? { ...item, name: editName, amount: parseFloat(editAmount) }
          : item,
      ),
    );
    setEditingId(null);
    setEditName("");
    setEditAmount("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditAmount("");
  };

  const getChartData = () => {
    const map = new Map<string, number>();
    expenses.forEach((e) => {
      map.set(e.category, (map.get(e.category) || 0) + e.amount);
    });
    return Array.from(map).map(([name, amount], index) => ({
      name,
      amount,
      color: COLORS[index % COLORS.length],
    }));
  };

  const totalBudget = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="pb-24 relative pt-4">
      <div className="px-4 space-y-6 animate-fadeScale">
        {viewMode === "info" && (
          <>
            {/* Flight Card */}
            <section>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                航班與住宿
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Flight Card */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    航班資訊
                  </h4>
                  {FLIGHTS.map((flight, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-3xl shadow-soft border border-white flex flex-col gap-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-red-50 text-japan-red rounded-xl">
                            <Plane size={20} />
                          </div>
                          <div>
                            <h4 className="font-bold text-japan-black">
                              {flight.flightNumber}
                            </h4>
                            <p className="text-xs text-gray-500 font-medium">
                              {flight.airline}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-1 rounded-md font-bold ${flight.type === "DEPARTURE" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"}`}
                        >
                          {flight.type === "DEPARTURE" ? "去程" : "回程"}
                        </span>
                      </div>
                      <div className="bg-paper p-3 rounded-2xl border border-gray-100">
                        <p className="font-bold text-sm text-gray-700 text-center mb-1">
                          {flight.route}
                        </p>
                        <p className="text-xs text-center text-gray-400 font-mono">
                          {flight.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Accommodation Card */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                    住宿資訊
                  </h4>
                  {ACCOMMODATIONS.map((hotel, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-3xl shadow-soft border border-white flex flex-col"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-indigo-50 text-indigo-japan rounded-xl mt-1">
                          <Building size={18} />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-japan-black mb-1">
                            {hotel.name}
                          </h4>
                          {hotel.address && (
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.address)}`}
                              target="_blank"
                              className="text-xs text-gray-400 underline decoration-gray-300 underline-offset-2 mb-2 block"
                            >
                              {hotel.address}
                            </a>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                              {hotel.dates}
                            </span>
                          </div>
                          {hotel.notes && (
                            <p className="text-xs text-gray-500 mt-2 bg-paper p-2 rounded-lg">
                              {hotel.notes}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Emergency and Other Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                  緊急聯絡
                </h3>
                <div className="bg-red-50 border border-red-100 p-5 rounded-3xl h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={18} className="text-red-500" />
                    <span className="font-bold text-red-800">緊急電話</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:110"
                      className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl shadow-sm text-red-700 hover:bg-red-100 transition-colors"
                    >
                      <Phone size={14} />{" "}
                      <span className="text-sm font-bold">110</span>
                    </a>
                    <a
                      href="tel:119"
                      className="flex items-center justify-center gap-2 bg-white p-3 rounded-xl shadow-sm text-red-700 hover:bg-red-100 transition-colors"
                    >
                      <Phone size={14} />{" "}
                      <span className="text-sm font-bold">119</span>
                    </a>
                  </div>
                </div>
              </section>

              <section className="bg-indigo-japan/5 rounded-3xl p-6 border border-indigo-japan/10 flex flex-col justify-center">
                <p className="text-[10px] font-black text-indigo-japan/50 uppercase tracking-[0.2em] mb-2">
                  專屬服務
                </p>
                <p className="text-xs text-indigo-japan/70 leading-relaxed font-medium">
                  如果您需要即時翻譯或當地建議，可以使用 AI
                  導遊功能或查看側邊欄的快速連結。
                </p>
              </section>
            </div>
          </>
        )}

        {viewMode === "wallet" && (
          <>
            {/* Wallet Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Currency Converter */}
              <section className="bg-white p-5 rounded-3xl shadow-soft border border-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-yellow-50 text-yellow-600 rounded-full">
                    <Coins size={18} />
                  </div>
                  <h3 className="font-bold text-japan-black">日幣換算</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-paper p-4 rounded-2xl flex items-center justify-between border border-sand">
                    <input
                      type="number"
                      value={jpyAmount}
                      onChange={(e) => setJpyAmount(e.target.value)}
                      placeholder="輸入日幣金額"
                      className="bg-transparent text-xl font-bold text-japan-black outline-none w-full placeholder-gray-300"
                    />
                    <span className="text-xs font-bold text-black ml-2">
                      JPY
                    </span>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="bg-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-black flex items-center gap-2">
                      匯率:
                      <input
                        type="number"
                        value={exchangeRate}
                        onChange={(e) =>
                          setExchangeRate(parseFloat(e.target.value))
                        }
                        className="w-12 bg-transparent text-center border-b border-gray-300 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="bg-indigo-japan p-4 rounded-2xl flex items-center justify-between text-black shadow-lg shadow-indigo-200">
                    <span className="text-2xl font-bold">
                      {jpyAmount
                        ? Math.round(
                            parseInt(jpyAmount) * exchangeRate,
                          ).toLocaleString()
                        : 0}
                    </span>
                    <span className="text-xs font-bold opacity-70">TWD</span>
                  </div>
                </div>
              </section>

              {/* Info Card for Wallet */}
              <section className="bg-amber-50 rounded-3xl p-6 border border-amber-100 flex flex-col justify-center">
                <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-2">
                  💡 省錢小撇步
                </h4>
                <p className="text-xs text-amber-700 leading-relaxed font-medium">
                  在日本消費時，建議多利用西瓜卡 (Suica)
                  或信用卡。部分老店仍僅收現金，請預留充足日幣。
                </p>
              </section>
            </div>

            {/* Budget Tracker */}
            <section className="bg-white p-5 rounded-3xl shadow-soft border border-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-matcha text-matcha-dark rounded-full">
                  <Calculator size={18} />
                </div>
                <h3 className="font-bold text-japan-black">記帳與預算</h3>
              </div>

              <div className="h-48 w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={getChartData()}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={65}
                      paddingAngle={5}
                      dataKey="amount"
                    >
                      {getChartData().map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) =>
                        `¥${value.toLocaleString()}`
                      }
                    />
                    <Legend
                      iconType="circle"
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                      wrapperStyle={{ fontSize: "10px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="text-center mb-6">
                <span className="text-xs text-gray-400 uppercase tracking-widest">
                  總支出
                </span>
                <p className="text-3xl font-bold text-indigo-japan mt-1 font-mono">
                  ¥{totalBudget.toLocaleString()}
                </p>
              </div>

              {/* Add Item Form */}
              <div className="bg-paper p-3 rounded-2xl border border-dashed border-gray-300 mb-4">
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="項目名稱"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    className="w-2/3 bg-white px-3 py-2 rounded-xl text-sm outline-none border border-transparent focus:border-matcha-dark"
                  />
                  <select
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value)}
                    className="w-1/3 bg-white px-2 py-2 rounded-xl text-xs outline-none border border-transparent focus:border-matcha-dark"
                  >
                    <option value="餐飲">餐飲</option>
                    <option value="交通">交通</option>
                    <option value="購物">購物</option>
                    <option value="住宿">住宿</option>
                    <option value="娛樂">娛樂</option>
                    <option value="其他">其他</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="金額 (JPY)"
                    value={newItemAmount}
                    onChange={(e) => setNewItemAmount(e.target.value)}
                    className="w-full bg-white px-3 py-2 rounded-xl text-sm outline-none border border-transparent focus:border-matcha-dark font-mono"
                  />
                  <button
                    onClick={handleAddExpense}
                    className="bg-matcha-dark text-white p-2 rounded-xl shadow-sm hover:bg-[#7A8A4B] transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Expense List */}
              <div className="space-y-2 max-h-60 overflow-y-auto no-scrollbar">
                {expenses.map((item) => {
                  const isEditing = editingId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl group transition-colors hover:bg-gray-100"
                    >
                      {isEditing ? (
                        // Editing Mode
                        <div className="flex items-center gap-2 w-full">
                          <div className="flex-grow flex gap-2">
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className="w-2/3 bg-white px-2 py-1 rounded-lg text-sm border border-indigo-200 outline-none"
                              autoFocus
                            />
                            <input
                              type="number"
                              value={editAmount}
                              onChange={(e) => setEditAmount(e.target.value)}
                              className="w-1/3 bg-white px-2 py-1 rounded-lg text-sm border border-indigo-200 outline-none font-mono"
                            />
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => handleSaveEdit(item.id)}
                              className="bg-matcha-dark text-white p-1.5 rounded-lg hover:bg-[#7A8A4B]"
                            >
                              <Check size={14} />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="bg-gray-300 text-white p-1.5 rounded-lg hover:bg-gray-400"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      ) : (
                        // View Mode
                        <>
                          <div className="flex items-center gap-3">
                            <div
                              className="w-1.5 h-8 rounded-full"
                              style={{
                                backgroundColor:
                                  COLORS[
                                    Math.floor(Math.random() * COLORS.length)
                                  ],
                              }}
                            ></div>
                            <div>
                              <p className="font-bold text-sm text-gray-700">
                                {item.name}
                              </p>
                              <p className="text-[10px] text-gray-400">
                                {item.category}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-sm font-bold text-gray-600">
                              ¥{item.amount.toLocaleString()}
                            </span>
                            <div className="flex gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => handleStartEdit(item)}
                                className="text-gray-400 hover:text-indigo-japan p-1"
                              >
                                <Pencil size={14} />
                              </button>
                              <button
                                onClick={() => handleDeleteExpense(item.id)}
                                className="text-gray-400 hover:text-red-400 p-1"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {viewMode === "maps" && <TransportMapsView />}
      </div>
    </div>
  );
};

export default UtilitiesView;
