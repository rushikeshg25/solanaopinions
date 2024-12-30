use anchor_lang::prelude::*;

#[account]
#[derive(InitSpace)]
pub struct Event {
    pub id: u64,
    #[max_len(280)]
    pub title: String,
    pub start_date: u64,
    pub end_date: u64,
    pub candidates: u64,
    pub total_pool: u64,
    pub yes_price: u64,
    pub no_price: u64,
    pub total_yes: u64,
    pub total_no: u64,
}
